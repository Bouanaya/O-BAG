import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Prop()
  id: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  size: string;

  @Prop()
  color: string;

  @Prop()
  price: number;

  @Prop()
  oldPrice: number;

  @Prop()
  discount: number;

  @Prop()
  model: string;

  @Prop()
  material: string;

  @Prop()
  dimensions: string;

  @Prop()
  weight: string;

  @Prop()
  sku: string;

  @Prop()
  image: string;

  // 👉 NEW FIELDS
  @Prop()
  materialInfo: string;

  @Prop()
  zippers: string;

  @Prop()
  handles: string;

  @Prop()
  exteriorPockets: string;

  @Prop()
  backpackStraps: string;

  @Prop()
  mainCompartment: string;

  @Prop()
  zippedCompartment: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
