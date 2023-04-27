const { google } = require('googleapis');
const { JWT } = require('google-auth-library');

const loginWithgoogle = async function(req,res){
    try{
            // set up authentication with the Gmail API using a service account
const jwtClient = new JWT({
    email: '<your-service-account-email>',
    keyFile: '<path-to-service-account-key-file>',
    scopes: ['https://www.googleapis.com/auth/gmail.readonly'],
  });
  
  // authenticate with the Gmail API
  jwtClient.authorize((err, tokens) => {
    if (err) {
      console.error(err);
      return;
    }
  
    // create a Gmail API client
    const gmail = google.gmail({ version: 'v1', auth: jwtClient });
  
    // get the list of unread messages in the inbox
    gmail.users.messages.list({
      userId: 'me',
      q: 'is:unread',
    }, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
  
      const messages = res.data.messages;
      if (messages && messages.length > 0) {
        // process new messages as required
        for (const message of messages) {
          console.log(message);
        }
      }
    });
  });

    }catch(error){
        return res.status(500).send({message:error.message});
    }
}


module.exports = (loginWithgoogle);