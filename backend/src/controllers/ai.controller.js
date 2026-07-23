const tripPlannerService = require("../services/tripPlanner.service");
const reviewService = require("../services/reviewSummarizer.service");
const budgetService = require("../services/budgetPlanner.service");
const chatService = require("../services/chatAssistant.service");
const fuelFinderService=require("../services/fuelFinderService")
const hotelFinderService=require("../services/findHotelService")
const totalCostService=require("../services/findTotalCostService")

// POST /api/ai/trip-planner
exports.tripPlanner = async (req, res) => {
  try {
    const body = req.body || {};

    const result = await tripPlannerService.planTrip(body);
    console.log(result)
    res.status(200).json({success:true,data:result})
    
    
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.message || "Internal server error",
    });
  }
};

exports.getFuelStations=async(req,res,body)=>{
  try{
    const body=req.body||{}
    const result=await fuelFinderService.findFuel(body)
    const fuel=result.fuelData.fuel_stations
    const electric=result.fuelData.electric_charging_stations
    res.status(200).json({success:true,fuel:fuel,electric:electric})
  }
  catch(err){
     res.status(500).json({
      success: false,
      message: err?.message || "Internal server error",
    });
  }
}

exports.findHotels=async(req,res,body)=>{
  try{
    const body=req.body||{}
    const result=await hotelFinderService.findHotels(body)
    const hotels=result.hotelData.hotels
    console.log(hotels)
    res.status(200).json({success:true,hotels:hotels})
  }
  catch(err){
    res.status(500).json({
      success: false,
      message: err?.message || "Internal server error",
    });
  }
}

exports.findTotalCost=async(req,res,body)=>{
  try{
    const body=req.body||{}
    const result=await totalCostService.findTotalCost(body)
    const text=result.text
    console.log(text)
    res.status(200).json({success:true,text:text})
  }
  catch(err){
    res.status(500).json({
      success: false,
      message: err?.message || "Internal server error",
    });
  }
}


// POST /api/ai/summarize-reviews
exports.summarizeReviews = async (req, res) => {
  try {
    const { reviews } = req.body || {};

    if (!reviews) {
      return res.status(400).json({
        success: false,
        message: "reviews is required",
      });
    }

    const result = await reviewService.summarizeReviews(reviews);

    res.json({
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.message || "Internal server error",
    });
  }
};

// POST /api/ai/budget-planner
exports.budgetPlanner = async (req, res) => {
  try {
    const body = req.body || {};

    const result = await budgetService.planBudget(body);

    res.json({
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.message || "Internal server error",
    });
  }
};

// POST /api/ai/chat
exports.chat = async (req, res) => {
  try {
    const { message, history = [] } = req.body || {};

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "message is required",
      });
    }

    const result = await chatService.chat(message, history);

    res.json({
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.message || "Internal server error",
    });
  }
};