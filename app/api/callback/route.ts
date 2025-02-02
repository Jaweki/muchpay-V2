import { MPESA_CALLBACK_DOCS_STORE_TYPE } from "@/utils/Interface";
import { mpesa_api_callback_endpoint } from "@/utils/lipa_na_mpesa";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const incomingRequest: any = await req.json();
    const mpesa_api_callback: MPESA_CALLBACK_DOCS_STORE_TYPE =
      incomingRequest.Body.stkCallback;
    console.log("Callback data: ", mpesa_api_callback);
    await mpesa_api_callback_endpoint(mpesa_api_callback);
    return new NextResponse(JSON.stringify("OK"), { status: 200 });
  } catch (error) {
    console.log("Error at callback url: ", error);
    return new NextResponse(JSON.stringify("OK"), { status: 200 });
  }
};
