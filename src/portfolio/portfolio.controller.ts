import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get(':userId')
  getPortfolio(@Param('userId') userId: string) {
    return this.portfolioService.getPortfolio(userId);
  }

  @Post(':userId/add-stock')
  addStockToPortfolio(@Param('userId') userId: string, @Body() stockData: any) {
    return this.portfolioService.addStockToPortfolio(userId, stockData);
  }

  @Delete(':userId/remove-stock/:symbol')
  removeStockFromPortfolio(
    @Param('userId') userId: string,
    @Param('symbol') symbol: string,
  ) {
    return this.portfolioService.removeStockFromPortfolio(userId, symbol);
  }
}
