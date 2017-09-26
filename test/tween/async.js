
import _Promise from 'promise-polyfill';
import assert from "./assert";


//----------------------------------------------------------------------------------------
//
// Promise polyfill
//
//----------------------------------------------------------------------------------------


if( !window.Promise ) window.Promise = _Promise;

const __context = document.createElement( "canvas" ).getContext( "2d" );

assert( __context, "CanvasRenderingContext2D를 찾을 수 없습니다." );


export const all = Promise.all.bind( Promise );


//----------------------------------------------------------------------------------------
//
// Image
//
//----------------------------------------------------------------------------------------

/**
 * loadImage 함수를 생성한다. 
 * 1. crossOrigin 인자를 이용해 load할 image element에 crossOrigin 속성을 제어할 수 있다. 
 * @param  {String} crossOrigin [description]
 * @return {[type]}             [description]
 */
export function makeLoadImage( crossOrigin ) {

	return function( url, imgElement = document.createElement( 'img' ) ) {

		if( crossOrigin != null ) 
			imgElement.crossOrigin = crossOrigin;

		return new Promise( (resolve, reject) => {

			imgElement.onload = e => {
				validation( imgElement ) 
					? resolve( imgElement ) 
					: reject( 'image element validation error' );
			};
			
			imgElement.onerror = e => reject( e );
			imgElement.src = url;
		});
	}
}

/**
 * 이미지를 로드하는 프라미스 객체를 반환한다. 
 * @param  {[type]} url        [description]
 * @param  {[type]} imgElement [description]
 * @return {[type]}            [description]
 */
export const loadImage = makeLoadImage();

/**
 * image 유효성 체크, 가로 세로 길이로 image를 제대로 가져왔는지 확인한다. 
 * @param  {[type]} img [description]
 * @return {[type]}     [description]
 */
function validation( img ){
	return ( img.width || img.naturalWidth ) !== 0 && ( img.height || img.naturalHeight ) !== 0;
}


/**
 * source( ImageElement || CanvasElement )의 ImageData를 가져온다. 
 * @param  {[type]} source  [description]
 * @param  {[type]} context [description]
 * @return {[type]}         [description]
 */
export function getImageData( source, context = null ){

	context = context || __context;

	context.canvas.width = source.width || source.naturalWidth;
	context.canvas.height = source.height || source.naturalHeight;

	context.drawImage( source, 0, 0 );

	return context.getImageData( 0, 0, context.canvas.width, context.canvas.height );
}

/**
 * request some data
 * @param  {[type]} url    [description]
 * @param  {String} method [description]
 * @return {[type]}        [description]
 */
export function request(url, method = 'GET') {
	return new Promise((resolve, reject) => {
		const req = new XMLHttpRequest();

		req.onload = () => resolve(req.responseText);
		req.onerror = e => reject(e);

		req.open(method, url);
		req.send(null);
	})
}



//----------------------------------------------------------------------------------------
//
// File
//
//----------------------------------------------------------------------------------------

const __input = document.createElement( 'input' );
__input.setAttribute( 'type', 'file' );

/**
 * file API를 이용해 로컬 파일 브라우져를 오픈한다. 
 * 1. 사용자가 로드할 파일을 선택할 경우 resolve를 호출한다. 
 * 2. 사용자가 취소할 경우 type: 'user cancel'을 호출한다. 
 * @param  {[type]} input  [description]
 * @param  {String} accept [description]
 * @return {[type]}        [description]
 */
export function browseFile( input = null, accept = "" ){

	input = input || __input;

	if( accept && accept.length ) 
		input.setAttribute( 'accept', accept );

	return new Promise( ( resolve, reject ) => {

		const onChange = e =>{

			let target = e.target,
				files = target.files;

			files.length ? resolve( files )
						 : reject( { type: "user cancel", files: files } );

			target.removeEventListener( e.type, onChange );
		}

		input.addEventListener( 'change', onChange );
		input.click();
	});
}

/**
 * file 객체를 불러온다. 
 * 1. readAsDataURL을 사용하여 파일을 불러온다.
 * 2. 성공할 경우 resolve( dataURL )을 호출한다. 
 * 3. error의 경우 reject( error )를 호출한다. 
 * @param  {[type]} file [description]
 * @return {[type]}      [description]
 */
export function readAsDataURL( file ){

	return new Promise( ( resolve, reject ) => {

		let reader = new FileReader();

		const onLoad = e => {

			resolve( e.target.result );
			clear( e.target );
		};

		const onError = e => {

			reject( e );
			clear( e.target );
		};

		const clear = target => {

			target.removeEventListener( 'load', onLoad );
			target.removeEventListener( 'error', onError );
		}

		reader.addEventListener( 'load', onLoad );
		reader.addEventListener( 'error', onError );
		reader.readAsDataURL( file );
	});
}


//----------------------------------------------------------------------------------------
//
// Util
//
//----------------------------------------------------------------------------------------
/**
 * motion이 끝나길 기다렸다 resolve
 * 1. motion은 시작되지 않을 수 있다. 
 * 2. 60ms 후에도 시작되지 않았다면 바로 resolve
 * @param  {[type]} motion [description]
 * @return {[type]}        [description]
 */
export function completeMotion(motion, after = 60) {
	return new Promise((resolve, reject) => {
		if(!motion.running) {
			setTimeout(() => {
				if(!motion.running) resolve('unstarted');
				else motion.once('complete', e => resolve(e));
			}, after);
		}
		else {
			motion.once('complete', e => resolve(e));
		}
	})
}

export function re(f, ...args) {
	return f(...args).then(
		result => {
			if(result.done) 
				return Promise.resolve(result.args);

			return re(f, ...result.args);
		}
	);
}
