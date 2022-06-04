// Code your solutions in this file

function writeCards( names, event ) {
    let message = []
    for ( let i = 0; i < names.length; i++ ) {
      message.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!` )
    }
    return message
  }

  function countDown(callCount) {
    while ( callCount > 0 ) {
      console.log(callCount);
      callCount--;
    }
    console.log( callCount );
  }