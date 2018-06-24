import { GraphQLList } from 'graphql';
import { Price } from '../types/Price';
import { fakeDatabase } from '../../FakeDatabase';

export default {
    price: {
        type: Price,
        description: 'Get a price.',
        args: {},
        resolve: function() {
            return {
                'sku': '012345678',
                'seller_id': 'seller_id',
                'prices': [{
                    'campaign_code': '1234',
                    'list_price': '234.56',
                    'price': '123.45',
                    'best_price': {
                        'payment_method_description': 'Fake',
                        'discount': '5.00',
                        'payment_method_id': 'fake',
                        'total_amount': '10.00'
                    },
                    'payment_methods': [{
                        'description': 'Fake',
                        'id': 'fake',
                        'installment_plans': [{
                            'installment': 1,
                            'installment_amount': '10.00',
                            'discount_amount': '0.00',
                            'interest_amount': '0.00',
                            'interest': '0.00',
                            'total_amount': '10.00',
                            'discount': '0.00'
                        }]
                    }],
                    'best_installment_plan': {
                        'installment_amount': '10.00',
                        'total_amount': '10.00',
                        'installment_quantity': 1,
                        'payment_method_description': 'Fake',
                        'interest': '0.00',
                        'payment_method_id': 'fake'
                    },
                }]
            };
        }
    }
}