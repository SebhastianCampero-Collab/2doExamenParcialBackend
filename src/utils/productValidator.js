export function validateProductBody(body, isComplete) {
    const validProperties = ["name", "category", "price", "stock", "supplier"];

    if (body) {
        const validPropertyInBody = validProperties.filter(property => body.hasOwnProperty(property));

        if (isComplete) {
            if (validPropertyInBody != validProperties.length) {
                console.log("Body is not complete for the api")
                return {
                    "validation": false,
                    "message": "Body is not complete for the api"
                };
            }
        } else {
            if (validPropertyInBody.length == 0) {
                console.log("Body has no valid properties");
                return {
                    "validation": false,
                    "message": "Body has no valid properties"
                };
            }
        }
        return validateBodyCorrect(body, validPropertiesInBody);
    } else {
        console.log("Body empty");
        return {
            "validation": false,
            "message": "Body empty"
        }
    }
}

function validateBodyCorrect(body, validPropertiesInBody) {
    let validationResult = null;
    for (let property of validPropertiesInBody) {
        console.log("checking property");
        switch (property) {
            case "name":
                validationResult = validateName(body, name);
                if (!validateResult.validation) return validationResult;
                break;
            case "category":
                validationResult = validateCategory(body, category);
                if (!validateResult.validation) return validationResult;
                break;
            case "price":
                validationResult = validatePrice(body, price);
                if (!validateResult.validation) return validationResult;
                break;
            case "stock":
                validationResult = validateStock(body, stock);
                if (!validateResult.validation) return validationResult;
                break;
            case "supplier":
                validationResult = validateSupplier(body, supplier);
                if (!validateResult.validation) return validationResult;
                break;
            default:
                console.log("body has no allowed properties")
                return {
                    "validation": true,
                    "message": "body has no allowed properties"
                }
        }
    }
    return {
        "validation": true,
        "message": "all validations passed"
    };
}

function validateName(productName) {
    return {
        "validation": (typeof productName === "string"),
        "message": "product name is invalid"
    }
}

function validateCategory(productCategory) {
    return {
        "validation": (typeof productCategory === "string"),
        "message": "category is invalid"
    }
}



function validateName(productPrice) {
    const price = Number(productPrice);
    return {
        "validation": (!isNaN(price) && price >= 0),
        "message": "price is invalid"
    }
}

function validateStock(productStock) {
    const stock = number(productStock)
    return {
        "validation": (!isNaN(stock) && Number.isInteger(stock) && stock >= 0),
        "message": "product name is invalid"
    }
}

function validateName(productName) {
    return {
        "validation": (typeof productName === "string"),
        "message": "product name is invalid"
    }
}

