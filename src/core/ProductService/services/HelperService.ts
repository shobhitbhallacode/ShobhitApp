import { fetch } from "./BaseService";

export const authToken = "1231232-123123123-123123123-12333";

export const TransactionLog = async (type: string, data: any) => {
    fetch("POST", "/expense/", authToken)?.then((response: any) => {
        return response;
    }).catch((error: any) => {
        console.log(error.message);
        return [];
    });
};

export const ParseToJSON = (Key: string, Value: any): any => {
    if (Key != null && Key != undefined && Value != null && Value.length > 0) {
        var jsonstring = JSON.parse("[{" + "\"" + Key + "\"" + ":" + JSON.stringify(Value) + "}]");
        return jsonstring;
    } else {
        return JSON.parse("[{}]");
    }
}

export const AddToJSON = (Key: string, item: any, Data: []) => {
    var requiredData = CheckNullOrEmpty(Data)[Key];
    if (Key != null && Key != undefined) {
        requiredData.push(item);
    } else {
        return JSON.parse("[]");
    }
}

export const ReplaceToJSON = (Key: string, NewValue: any, Data: any) => {
    if (Key != null && Key != undefined && NewValue != null && Data.length > 0) {

    } else {
        return JSON.parse("[]");
    }
}
export const DeleteFromJSON = (Key: string, Item: any, Data: any) => {
    if (Key != null && Key != undefined && Data.length > 0) {

    } else {
        return JSON.parse("[]");
    }
}
export const CheckNullOrEmpty = (data: any): any => {
    if (data != null && data != undefined && data["length"] > 0) {
        return data[0];
    }
    else {
        return [];
    }
}
export const ExtractDataFromKey = (Key: string, data:any)=>{
    return CheckNullOrEmpty(data)[Key];
}