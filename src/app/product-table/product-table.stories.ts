import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { ProductTableComponent } from './product-table.component';

export default {
  title: 'Product Table',
  component: ProductTableComponent,
  decorators: [
    moduleMetadata({
      declarations: [ProductTableComponent],
    }),
  ],
} as Meta;

const Template: StoryFn<ProductTableComponent> = (
  args: ProductTableComponent
) => ({
  component: ProductTableComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  productName: 'Lahmacun',
  amount: 1,
  price: 10,
  total: 10,
  toppings: [
    { name: 'Döner', amount: 1, price: 5, total: 5, plu: 100 },
    { name: 'Çeşni', amount: 1, price: 2, total: 2, plu: 100 },
    { name: 'Döner', amount: 1, price: 5, total: 5, plu: 100 },
    { name: 'Çeşni', amount: 1, price: 2, total: 2, plu: 100 },
    { name: 'Döner', amount: 1, price: 5, total: 5, plu: 100 },
    { name: 'Çeşni', amount: 1, price: 2, total: 2, plu: 100 },
    { name: 'Döner', amount: 1, price: 5, total: 5, plu: 100 },
    { name: 'Çeşni', amount: 1, price: 2, total: 2, plu: 100 },
  ],
};
