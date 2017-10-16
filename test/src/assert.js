

/**
 * assertion 
 * @param  {[type]} assertion [description]
 * @param  {[type]} message   [description]
 * @return {[type]}           [description]
 */
export default function assert( assertion, message ){

	if( !assertion )
		throw new Error( "[Assertion Error] " + message );
}
