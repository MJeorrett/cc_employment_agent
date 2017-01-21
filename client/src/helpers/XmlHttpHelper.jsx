const XmlHttpHelper = {

  get( url, onloadCallback ) {
    var req = new XMLHttpRequest()
    req.open( 'GET', url )
    req.onload = () => {
      const dataObject = JSON.parse( req.responseText )
      if( req.status === 200 ) {
        onloadCallback( dataObject )
      } else {
        console.log( "Error GET from:", url, ", failed with status: ", req.status, "/n", dataObject );
      }
    }
    req.send( null )
  },

  post( url, payload, onloadCallback, withCredentials ) {
    var req = new XMLHttpRequest()
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
  }
}

export default XmlHttpHelper
