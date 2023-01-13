import { Logger } from '@aws-lambda-powertools/logger';
import { LambdaInterface } from '@aws-lambda-powertools/commons';

const logger = new Logger();

class Lambda implements LambdaInterface {
    // Set the log event flag to true
    @logger.injectLambdaContext({ logEvent: true })
    public async handler(_event: any, _context: any): Promise<void> {
        logger.info('This is an INFO log with some context');
    }

}

const myFunction = new Lambda();
export const handler = myFunction.handler.bind(myFunction); // (1)