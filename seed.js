let {ProductModel}=require('./models/Product')
const fs=require('fs')
const path=require('path')

async function seedModal(){
    const data=[{
        pid: "749310dd-eb95-4195-8519-97efcb90d4d0",
        name: "boAt Flash Edition Smart Watch with Activity Tracker, Multiple Sports Modes, 1.3\" Screen, 170+ Watch Faces, Sleep Monitor, Gesture, Camera & Music Control",
        price: 1499,
        description: [
          "1.3\"(33mm) LCD display with a round dial that sports complete capacitive and responsive touch interface for effortless control.",
          "The health monitoring feature in the watch helps you keep a track of heart rate & blood oxygen levels.",
          "The daily activity tracker records daily steps taken, calories burnt and distances covered. Battery Capacity - 200mAh, Working Time - Up to 7 Days, Charging Time - 2 Hours10 active sports modes include: running, walking, cycling, climbing, yoga, basketball, football, badminton, skipping & swimming."
        ],
        image:{
          fileName: "img1676489541638-7024816e-28fa-4342-9b6d-32b7cf7a8f57.jpeg",
          filePath: "D:\\terminal\\project\\Backend\\uploads\\img1676489541638-7024816e-28fa-4342-9b6d-32b7cf7a8f57.jpeg",
          contentType: "image/jpeg"
        },
        category: "watch",
        sellerId: "81933696-fa20-4f24-828c-39351548b9e1",
       
      },{
        
        pid: "447d76ad-199b-4f57-9abd-fffb081ec31b",
        name: "Symbol Men's Regular Polo Shirt",
        price: 369,
        description: [
          "Care Instructions: Hand Wash Only",
          "Fit Type: Regular Fit",
          "Care Instructions: Machine Wash",
          "Fit Type: Regular Fit",
          "Material - 60% Cotton and 40% Polyester",
          "Half sleeve Polo T-Shirt"
        ],
        image: {
          fileName: "img1676518324924-1708124b-4a08-41d3-97d6-8b9cf7522430.jpeg",
          filePath: "D:\\terminal\\project\\Backend\\uploads\\img1676518324924-1708124b-4a08-41d3-97d6-8b9cf7522430.jpeg",
          contentType: "image/jpeg"
        },
        category: "clothing",
        sellerId: "81933696-fa20-4f24-828c-39351548b9e1"
      },{
        
        pid: "77f2e45a-a7d5-472e-a862-33a8ea169130",
        name: "AMERICAN CREW Half Sleeves Striped Polo Collar T-Shirt for Men",
        price: 854,
        description: [
          "Regular Fit Half Sleeve Polo is made of comfortable, Bio Washed cotton-poly Pique fabric, a three-button placket, and ribbed cuffs for a classic look.",
          "Fabric Composition - Cotton 60% Poly 40% Blend, Bio Wash Pique Fabric.",
          "Pattern - Striped Men’s Polo Tshirt, Rib Collar & Sleeve for Amazing Fit.",
          "Classic \"American Crew\" Signature Polo with Logo Embroidery on Chest.",
          "“Made In India” by Socially Compliant MSME Factory. All Components Used to make this T-Shirt are Proudly \"Made in India\"."
        ],
        image: {
          fileName: "img1676518324924-55c1b21f-f6c1-4832-a52d-ce71975c0655.jpeg",
          filePath: "D:\\terminal\\project\\Backend\\uploads\\img1676518324924-55c1b21f-f6c1-4832-a52d-ce71975c0655.jpeg",
          contentType: "image/jpeg"
        },
        category: "clothing",
        sellerId: "81933696-fa20-4f24-828c-39351548b9e1",
        
      },{
        
        pid: "e7140a94-489e-4312-8c2a-c9d081bbdfca",
        name: "U.S. POLO ASSN. ARRICK 2.0 Men's Lace-Up Mid Top Sneakers",
        price: 4299,
        description: [
          "Sole: Rubber",
          "Closure: Lace-Up",
          "Shoe Width: Medium",
          "U S Polo Mid Top Sneakers",
          "U S Polo Shoes",
          "U S Polo Footwear"
        ],
        image: {
          fileName: "img1676518324924-fa398f49-9eec-4260-904a-19c619c1351e.jpeg",
          filePath: "D:\\terminal\\project\\Backend\\uploads\\img1676518324924-fa398f49-9eec-4260-904a-19c619c1351e.jpeg",
          contentType: "image/jpeg"
        },
        category: "shoes",
        sellerId: "81933696-fa20-4f24-828c-39351548b9e1",
        
      },{
        
        pid: "95bd1b10-7a3d-45db-983e-0ed708a7a87f",
        name: "Sparx Men's Canvas Sneakers",
        price: 669,
        description: [
          "Sole: Ethylene Vinyl Acetate",
          "Closure: Lace-Up",
          "Fit Type: Relaxed",
          "Shoe Width: Medium",
          "WHAT YOU GET: 1. One Pair of Casual Shoes as shown in the pictures.2. Storage Box.3. Sparx Trust",
          "KEY FEATURES: Made to Last Long, Elegant Packaging, Perfect Gifting Option, Zero compromise on quality",
          "Packaging : We know how important it is to store prized possessions well. Hence, every pair of shoes is impeccably packed in a beautiful and classy storage box"
        ],
        image: {
          fileName: "img1676518324924-892ca3e4-4389-4417-8c8c-3fa7d633fbe0.jpeg",
          filePath: "D:\\terminal\\project\\Backend\\uploads\\img1676518324924-892ca3e4-4389-4417-8c8c-3fa7d633fbe0.jpeg",
          contentType: "image/jpeg"
        },
        category: "shoes",
        sellerId: "81933696-fa20-4f24-828c-39351548b9e1",
      },{
        
        pid: "0cb02357-1b54-47f9-8f27-c56eca99fd62",
        name: "boAt Wave Edge with 1.85\" HD Display, Advanced Bluetooth Calling Chip, Functional Crown, 100+ Sports Modes,Widget Control",
        price: 1299,
        "description": [
          "Bluetooth Calling- Calling made convenient with just a tap on Wave Edge. Save up to 10 contacts, make calls with the dial pad and its superior quality speaker & mic make your experience smooth and clear.",
          "Screen Size- Wave Edge comes with a big, bold and a sharp screen with a 1.85” HD Display coupled with 90% Screen-to-Body Ratio.",
          "Functional Crown- Easily navigate through the watch and smoothly switch your watch faces with the functional crown .",
          "100+ Sports Modes- Switch up your fitness and sports routines with 100+ Sports modes to choose from."
        ],
        "image": {
          fileName: "img1676518324924-ad56218d-e296-4e58-b2e0-d509bc196900.png",
          filePath:"D:\\terminal\\project\\Backend\\uploads\\img1676518324924-ad56218d-e296-4e58-b2e0-d509bc196900.png",
          contentType: "image/png"
        },
        category: "watch",
        sellerId: "81933696-fa20-4f24-828c-39351548b9e1",
      }
    ]
    const response=await ProductModel.insertMany(data,(err)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            console.log("done");
        }
    })
    console.log(response)
}


module.exports={seedModal}