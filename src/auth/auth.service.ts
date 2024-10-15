import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import {
  Portfolio,
  PortfolioDocument,
} from 'src/portfolio/schemas/portfolio.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Portfolio.name)
    private portfolioModel: Model<PortfolioDocument>,
  ) {}

  async registerUser(email: string, name: string, googleId: string) {
    let user = await this.userModel.findOne({ email }).exec();
    if (!user) {
      // Create user if not found
      user = new this.userModel({ email, name, googleId });
      await user.save();

      // Create a portfolio for the new user
      const portfolio = new this.portfolioModel({
        userId: user._id,
        stocks: [],
      });
      await portfolio.save();
    }

    return user;
  }
}
