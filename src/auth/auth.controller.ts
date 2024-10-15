import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() body: { email: string; name: string; googleId: string },
  ) {
    return this.authService.registerUser(body.email, body.name, body.googleId);
  }
}
