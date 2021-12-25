import React, {useRef, useEffect} from "react";
export default function Paypal(){
    const paypal = useRef();
    useEffect(()=>{
        window.paypal.Buttons({
            createOder: (data, action, err) =>{
                return action.order.create({
                    intent: "CAPTURE",
                    purchase_unit:[
                        {
                            description: "Cool looking table",
                            amount:{
                                currency_code:"USD",
                                value: 100,
                            },
                        },
                    ],
                });
            },
            onApprove: async (data, action) =>{
                const order = await action.order.capture()
                console.log(order)
            },
            onError: (err) =>{
                console.log(err.message)
            }
        }).render(paypal.current);
    },[])
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}