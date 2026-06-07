import { motion } from "framer-motion"
import { WalletOverviewCards } from "./components/WalletOverviewCards"
import { WithdrawalPanel } from "./components/WithdrawalPanel"
import { EarningsBreakdownCard } from "./components/EarningsBreakdownCard"
import { TransactionLedger } from "./components/TransactionLedger"

export function WalletPage() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 }
    }
  }

  return (
    <motion.div 
      className="pb-12 space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">Wallet Management</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Manage your funds, request withdrawals via UPI or Bank Transfer, and view your complete financial ledger.
          </p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <WalletOverviewCards />
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div className="xl:col-span-8">
          <WithdrawalPanel />
        </div>
        <div className="xl:col-span-4">
          <EarningsBreakdownCard />
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <TransactionLedger />
      </motion.div>
    </motion.div>
  )
}
