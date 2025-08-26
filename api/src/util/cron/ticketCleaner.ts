// cron/ticketCleaner.ts
import cron from "node-cron";
import Ticket from "../../models/Ticket";

// Runs every minute
cron.schedule("* * * * *", async () => {
  const now = new Date();
  const cutoff = new Date(now.getTime() - 15 * 60 * 1000); // 15 min ago

  try {
    const result = await Ticket.updateMany(
      { status: "pending", createdAt: { $lte: cutoff } },
      { $set: { status: "canceled" } }
    );

    if (result.modifiedCount > 0) {
      console.log(`[CRON] Canceled ${result.modifiedCount} expired pending tickets`);
    }
  } catch (err) {
    console.error("[CRON] Error canceling expired tickets:", err);
  }
});
