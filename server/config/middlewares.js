import bodyParser from 'body-parser';
import morgan from 'morgan';
import winston from 'winston';

const level = process.env.LOG_LEVEL || 'debug';
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log` 
        // - Write all logs error (and below) to `error.log`.
        //
        new winston.transports.File({
            filename: 'error.log',
            level: 'error'
        }),
        new winston.transports.File({
            filename: 'combined.log'
        })
    ]
});

export default app => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    switch(app.get('env')) {
        case 'development':
            // compact, colorful dev logging
            app.use(morgan('dev'));
            
            logger.add(new winston.transports.Console({
                level: level,
                timestamp: () => new Date().toISOString(),
            }));
            break;
        case 'production':
            logger: logger.add(new winston.transports.Console({
                transports: [
                    new winston.transports.Console({
                        level: level,
                        timestamp: function () {
                            return (new Date()).toISOString();
                        }
                    })
                ]
            }))
            break;
    }
};
