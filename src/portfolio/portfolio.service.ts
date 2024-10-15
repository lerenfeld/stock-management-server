import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Portfolio, PortfolioDocument } from './schemas/portfolio.schema';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectModel(Portfolio.name)
    private portfolioModel: Model<PortfolioDocument>,
  ) {}

  async getPortfolio(userId: string): Promise<Portfolio> {
    return this.portfolioModel.findOne({ userId }).exec();
  }

  async addStockToPortfolio(
    userId: string,
    stockData: any,
  ): Promise<Portfolio> {
    const portfolio = await this.portfolioModel.findOne({ userId });
    portfolio.stocks.push(stockData);
    return portfolio.save();
  }

  async removeStockFromPortfolio(
    userId: string,
    symbol: string,
  ): Promise<Portfolio> {
    const portfolio = await this.portfolioModel.findOne({ userId });
    portfolio.stocks = portfolio.stocks.filter(
      (stock) => stock.symbol !== symbol,
    );
    return portfolio.save();
  }
}
