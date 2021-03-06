const XmlHttpHelper = {

  get( url, onloadCallback ) {
    const req = new XMLHttpRequest()
    req.open( 'GET', url )
    req.setRequestHeader( 'Content-Type', 'application/json' )
    req.withCredentials = true
    req.onload = () => {
      const dataObject = JSON.parse( req.responseText )
      if( req.status === 200 ) {
        onloadCallback( dataObject, req.status )
      } else {
        console.log( "Error GET from:", url, ", failed with status: ", req.status, "/n", dataObject );
      }
    }
    req.send( null )
  },

  post( url, payload, onloadCallback, withCredentials ) {
    const req = new XMLHttpRequest()
    req.open( 'POST', url )
    req.setRequestHeader( 'Content-Type', 'application/json' )
    if ( withCredentials ) req.withCredentials = true
    req.onload = () => {
      const dataObject = JSON.parse( req.responseText )
      if( req.status === 201 ) {
        if ( onloadCallback ) onloadCallback( dataObject )
      } else {
        console.log( "Error GET from:", url, ", failed with status: ", req.status, "/n", dataObject );
      }
    }
    req.send( JSON.stringify( payload ) )
  },

  delete( url, onloadCallback) {
    const req = new XMLHttpRequest()
    req.open( 'DELETE', url )
    req.setRequestHeader( 'Content-Type', 'application/json' )
    req.withCredentials = true
    req.onload = () => {
      if ( req.status === 204 ) {
        console.log( "Signed out")
        onloadCallback( true )
      } else {
        console.log( "Sign out failed with status", req.status )
        onloadCallback( false )
      }
    }
    req.send( null )
  }
}

export default XmlHttpHelper
