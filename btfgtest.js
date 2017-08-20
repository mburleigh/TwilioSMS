// change from online editor

'use latest';
import twilio from 'twilio';
module.exports = (context, cb) => {
  // POST a json object with at least the following properties.
  //const { body, to_number, from_number } = context.data;
  var body = context.data.Body
  var to_number = context.data.To
  var from_number = context.data.From
  const { TWILIO_SID, TWILIO_AUTH_TOKEN } = context.secrets;
  //cb(null, { message.sid });
  
  var client = new twilio.RestClient(TWILIO_SID, TWILIO_AUTH_TOKEN);
  //client.messages.create({
  //  body,
  //  to_number,
  //  from_number
  //}, (err, message) => {
  //  if (err) return cb(err);
  //  cb(null, message);
  //});
  
  client.messages.create({
    body: context.data.Body,
    to: '+12817996728',  // Text this number
    from: '+18325005475' // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
  
  cb(null, { 'Done' });
};
