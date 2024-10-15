import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { User, UserSchema } from './auth/schemas/user.schema';
import {
  Portfolio,
  PortfolioSchema,
} from './portfolio/schemas/portfolio.schema';
import { PortfolioModule } from './portfolio/portfolio.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://lerenfeld1:oFqRDcew95iDIyy4@cluster0.qza2g.mongodb.net/stock-management?retryWrites=true&w=majority',
      //'mongodb://localhost:27017/stock-management',
    ),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([
      { name: Portfolio.name, schema: PortfolioSchema },
    ]),

    //PortfolioModule,
    //AuthModule,
    // Import the PortfolioModule
    //StockModule, // Import the StockModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
