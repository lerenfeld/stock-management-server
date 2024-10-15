import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PortfolioModule } from './portfolio/portfolio.module';
//import { StockModule } from './stock/stock.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://lerenfeld1:oFqRDcew95iDIyy4@cluster0.qza2g.mongodb.net/stock-management?retryWrites=true&w=majority',
    ),
    PortfolioModule, // Import the PortfolioModule
    //StockModule, // Import the StockModule
  ],
})
export class AppModule {}
