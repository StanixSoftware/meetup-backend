import mongoose from 'mongoose';

export default () => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/meetupApp', { useNewUrlParser: true });
    mongoose.connection
        .once('open', () => console.log('MongoDB Running.'))
        .on('error', err => console.log(err));
};
