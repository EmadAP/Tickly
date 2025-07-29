import { Request, Response, NextFunction } from "express";

const ALLOWED_SECTION_NAMES = [
  "VIP",
  "Floor",
  "Section A",
  "Section B",
  "Section C",
  "Section D",
  "Section E",
  "Section F",
  "Balcony Left",
  "Balcony Right",
  "General",
];

export const validateSectionInput = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, price, quantity, onSell, discountPercent } = req.body;

  // Name
  if (!name || !ALLOWED_SECTION_NAMES.includes(name)) {
    res.status(400).json({
      message: `Section name must be one of: ${ALLOWED_SECTION_NAMES.join(
        ", "
      )}`,
    });
    return;
  }

  // Price
  const parsedPrice = Number(price);
  if (isNaN(parsedPrice) || parsedPrice < 1) {
    res.status(400).json({ message: "Price must be a non-negative number." });
    return;
  }

  // Quantity
  const parsedQuantity = Number(quantity);
  if (isNaN(parsedQuantity) || parsedQuantity < 0) {
    res
      .status(400)
      .json({ message: "Quantity must be a number greater than 0." });
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
  req.body.onSell = parsedOnSell;

  next();
};
