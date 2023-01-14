import Stripe from "stripe";

const stripe =  new Stripe(process.env.Stirpe_Secret_Key)


export default async function StripeHandler(req,res){
   
    if(req.method === "POST"){
        const {index} = req.body;
            const prices = await stripe.prices.list({
                lookup_keys: [req.body.lookup_keys],
                expand: ["data.product"],
            })
            const session = await stripe.checkout.sessions.create({
                billing_address_collection: "auto",
                line_items:[
                    {
                    price: prices.data[index].id,
                    quantity: 1,
                },
                ],
                mode: "subscription",
                success_url: `${req.headers.origin}/`,
                cancel_url: `${req.headers.origin}/cancle`,
            }) 
            res.json({url: session.url})
            console.log(session);
            
    }
    else{
        res.setHeader("Allow", "POST")
        res.status(405).end("Method not allowed")
    }
}

