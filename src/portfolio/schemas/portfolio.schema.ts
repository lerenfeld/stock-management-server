import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PortfolioDocument = Portfolio & Document;

@Schema()
export class Stock {
  @Prop({ required: true })
  symbol: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  latestPrice: number;
}

@Schema()
export class Portfolio {
  @Prop({ required: true })
  userId: string;

  @Prop({ type: [Stock], default: [] })
  stocks: Stock[];
}

export const PortfolioSchema = SchemaFactory.createForClass(Portfolio);
