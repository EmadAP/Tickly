import { Request, Response, NextFunction } from "express";

export const validateSectionInput = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { event, name, price, quantity, sold, onSell, discountPercent } =
    req.body;

  // Event ID (must be a valid Mongo ObjectId string)
  if (!event || typeof event !== "string" || !/^[a-f\d]{24}$/i.test(event)) {
    res.status(400).json({ message: "Invalid or missing event ID." });
    return;
  }

  // Name
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    res
      .status(400)
      .json({ message: "Section name must be at least 2 characters." });
    return;
  }

  // Price
  const parsedPrice = Number(price);
  if (isNaN(parsedPrice) || parsedPrice < 0) {
    res.status(400).json({ message: "Price must be a non-negative number." });
    return;
  }

  // Quantity
  const parsedQuantity = Number(quantity);
  if (isNaN(parsedQuantity) || parsedQuantity < 1) {
    res
      .status(400)
      .json({ message: "Quantity must be a number greater than 0." });
    return;
  }

  // Sold
  const parsedSold = sold !== undefined ? Number(sold) : 0;
  if (isNaN(parsedSold) || parsedSold < 0) {
    res
      .status(400)
      .json({ message: "Sold must be a number greater than or equal to 0." });
    return;
  }

  // onSell
  const parsedOnSell =
    onSell === true || onSell === "true" || onSell === "1" || onSell === 1;

  // discountPercent
  if (discountPercent !== undefined) {
    const parsedDiscount = Number(discountPercent);
    if (isNaN(parsedDiscount) || parsedDiscount < 0 || parsedDiscount > 100) {
      res.status(400).json({
        message: "Discount percent must be between 0 and 100 if provided.",
      });
      return;
    }
  }

  // Attach normalized fields to req.body
  req.body.price = parsedPrice;
  req.body.quantity = parsedQuantity;
  req.body.sold = parsedSold;
  req.body.onSell = parsedOnSell;

  next();
};
