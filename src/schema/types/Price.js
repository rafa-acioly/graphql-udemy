import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLInputObjectType,
    GraphQLNonNull
} from "graphql";

const BestPrice = new GraphQLObjectType({
    name: "BestPrice",
    description: "Information about the best price",
    fields: () => ({
        payment_method_description: { type: GraphQLString },
        discount: { type: GraphQLString },
        payment_method_id: { type: GraphQLString },
        total_amount: { type: GraphQLString }
    })
});

const BestInstallmentPlan = new GraphQLObjectType({
    name: "BestInstallmentPlan",
    description: "List of installment plans",
    fields: () => ({
        installment_amount: { type: GraphQLString },
        total_amount: { type: GraphQLString },
        installment_quantity: { type: GraphQLInt },
        payment_method_description: { type: GraphQLString },
        interest: { type: GraphQLString },
        payment_method_id: { type: GraphQLString }
    })
});

const InstallmentPlans = new GraphQLObjectType({
    name: "InstallmentPlan",
    description: "List of installment plans",
    fields: () => ({
        installment: { type: GraphQLInt },
        installment_amount: { type: GraphQLString },
        discount_amount: { type: GraphQLString },
        interest_amount: { type: GraphQLString },
        interest: { type: GraphQLString },
        total_amount: { type: GraphQLString },
        discount: { type: GraphQLString }
    })
});

const PaymentMethods = new GraphQLObjectType({
    name: "PaymentMethods",
    description: "Information about payment methods",
    fields: () => ({
        id: { type: GraphQLString },
        description: { type: GraphQLString },
        installment_plans: { type: GraphQLList(InstallmentPlans) }
    })
})

const Prices = new GraphQLObjectType({
    name: "Prices",
    description: "List of prices",
    fields: () => ({
        campaign_code: { type: GraphQLString },
        list_price: { type: GraphQLString },
        price: { type: GraphQLString },
        best_price: { type: BestPrice },
        payment_methods: { type: GraphQLList(PaymentMethods) },
        best_installment_plan: { type: BestInstallmentPlan }
    })
});

export const Price = new GraphQLObjectType({
    name: "Price",
    description: "All details of a price",
    fields: () => ({
        sku: { type: GraphQLString },
        seller_id: { type: GraphQLString },
        prices: { type: GraphQLList(Prices) },
    })
});