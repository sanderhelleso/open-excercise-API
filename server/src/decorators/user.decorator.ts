import { createParamDecorator } from '@nestjs/common';

/**
 * retrieve the current user with a decorator
 * example of a controller method:
 * @Post()
 * someMethod(@User() user: User) {
 *   // do something with the user
 * }
 */

export const User = createParamDecorator((_, req) => req.user);
