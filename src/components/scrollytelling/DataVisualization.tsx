import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowDownIcon, ArrowUpIcon, TrendingDownIcon, TrendingUpIcon } from 'lucide-react';

interface FoodSpendingData {
  year: string;
  staples: number;
  processed: number;
  vegetables: number;
  dairy: number;
  total: number;
}

interface FoodItemData {
  name: string;
  icon: string;
  color: string;
  percentage1983: number;
  percentage2023: number;
  change: number;
}

const DataVisualization = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const staplesRef = useRef<HTMLDivElement>(null);
  const processedRef = useRef<HTMLDivElement>(null);
  const insightsRef = useRef<HTMLDivElement>(null);
  
  const chartInView = useInView(chartRef, { once: false, amount: 0.3 });
  const staplesInView = useInView(staplesRef, { once: false, amount: 0.3 });
  const processedInView = useInView(processedRef, { once: false, amount: 0.3 });
  const insightsInView = useInView(insightsRef, { once: false, amount: 0.3 });

  // Mock data for the line chart
  const foodSpendingData: FoodSpendingData[] = [
    { year: '1983', staples: 42, processed: 8, vegetables: 15, dairy: 12, total: 77 },
    { year: '1999', staples: 36, processed: 12, vegetables: 14, dairy: 13, total: 75 },
    { year: '2004', staples: 32, processed: 15, vegetables: 13, dairy: 14, total: 74 },
    { year: '2011', staples: 28, processed: 18, vegetables: 12, dairy: 15, total: 73 },
    { year: '2022', staples: 24, processed: 22, vegetables: 11, dairy: 15, total: 72 },
    { year: '2023', staples: 22, processed: 25, vegetables: 11, dairy: 15, total: 73 },
  ];

  // Mock data for staple food items
  const stapleItems: FoodItemData[] = [
    { name: 'Rice', icon: '🍚', color: '#e6d2aa', percentage1983: 18, percentage2023: 9, change: -9 },
    { name: 'Wheat', icon: '🌾', color: '#d4b483', percentage1983: 12, percentage2023: 6, change: -6 },
    { name: 'Pulses', icon: '🫘', color: '#c19875', percentage1983: 8, percentage2023: 4, change: -4 },
    { name: 'Oils', icon: '🫙', color: '#f2cc8f', percentage1983: 4, percentage2023: 3, change: -1 },
  ];

  // Mock data for processed food items
  const processedItems: FoodItemData[] = [
    { name: 'Packaged Snacks', icon: '🍟', color: '#e76f51', percentage1983: 2, percentage2023: 8, change: 6 },
    { name: 'Soft Drinks', icon: '🥤', color: '#f94144', percentage1983: 1, percentage2023: 7, change: 6 },
    { name: 'Ready-to-eat', icon: '🍕', color: '#f3722c', percentage1983: 3, percentage2023: 6, change: 3 },
    { name: 'Processed Dairy', icon: '🍦', color: '#f8961e', percentage1983: 2, percentage2023: 4, change: 2 },
  ];

  return (
    <div className="bg-background text-foreground w-full py-16">
      {/* Line Chart Section */}
      <div 
        ref={chartRef} 
        className="max-w-5xl mx-auto px-4 mb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={chartInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold mb-2">The Shifting Food Budget</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Watch how Indian household food spending has evolved over four decades, with staples declining
            and processed foods rising dramatically.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={chartInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-[400px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={foodSpendingData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="year" />
              <YAxis domain={[0, 50]} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  border: 'none'
                }} 
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="staples" 
                stroke="#d4b483" 
                strokeWidth={3} 
                dot={{ r: 6 }} 
                activeDot={{ r: 8 }} 
                name="Staples"
              />
              <Line 
                type="monotone" 
                dataKey="processed" 
                stroke="#e76f51" 
                strokeWidth={3} 
                dot={{ r: 6 }} 
                activeDot={{ r: 8 }} 
                name="Processed Foods"
              />
              <Line 
                type="monotone" 
                dataKey="vegetables" 
                stroke="#2a9d8f" 
                strokeWidth={3} 
                dot={{ r: 6 }} 
                activeDot={{ r: 8 }} 
                name="Vegetables"
              />
              <Line 
                type="monotone" 
                dataKey="dairy" 
                stroke="#457b9d" 
                strokeWidth={3} 
                dot={{ r: 6 }} 
                activeDot={{ r: 8 }} 
                name="Dairy"
              />
              <Line 
                type="monotone" 
                dataKey="total" 
                stroke="#6c757d" 
                strokeWidth={3} 
                strokeDasharray="5 5" 
                dot={{ r: 6 }} 
                activeDot={{ r: 8 }} 
                name="Total Food Share"
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={chartInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 text-center text-muted-foreground"
        >
          <p>Percentage of household budget spent on different food categories (1983-2023)</p>
        </motion.div>
      </div>

      {/* Shrinking Staples Section */}
      <div 
        ref={staplesRef} 
        className="max-w-5xl mx-auto px-4 mb-24 py-8 bg-muted/30 rounded-lg"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={staplesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold mb-2">The Shrinking Staples</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Traditional staples that once dominated the Indian food basket have seen a dramatic decline in their share of the household budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stapleItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={staplesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <div 
                      className="text-6xl mb-4 p-4 rounded-full" 
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    
                    <div className="flex items-center justify-between w-full mb-2">
                      <span className="text-muted-foreground">1983:</span>
                      <span className="font-bold">{item.percentage1983}%</span>
                    </div>
                    
                    <div className="flex items-center justify-between w-full mb-4">
                      <span className="text-muted-foreground">2023:</span>
                      <span className="font-bold">{item.percentage2023}%</span>
                    </div>
                    
                    <Badge 
                      variant="outline" 
                      className="flex items-center gap-1 px-3 py-1"
                      style={{ 
                        backgroundColor: `${item.color}20`,
                        color: item.color,
                        borderColor: item.color
                      }}
                    >
                      <TrendingDownIcon size={16} />
                      {Math.abs(item.change)}% decline
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Processed Food Takeover Section */}
      <div 
        ref={processedRef} 
        className="max-w-5xl mx-auto px-4 mb-24 py-8 bg-muted/30 rounded-lg"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={processedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold mb-2">The Processed Food Takeover</h2>
          <p className="text-lg text-muted-foreground mb-8">
            As traditional staples declined, processed foods have surged to become a major part of the Indian food budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processedItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={processedInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <div 
                      className="text-6xl mb-4 p-4 rounded-full" 
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    
                    <div className="flex items-center justify-between w-full mb-2">
                      <span className="text-muted-foreground">1983:</span>
                      <span className="font-bold">{item.percentage1983}%</span>
                    </div>
                    
                    <div className="flex items-center justify-between w-full mb-4">
                      <span className="text-muted-foreground">2023:</span>
                      <span className="font-bold">{item.percentage2023}%</span>
                    </div>
                    
                    <Badge 
                      variant="outline" 
                      className="flex items-center gap-1 px-3 py-1"
                      style={{ 
                        backgroundColor: `${item.color}20`,
                        color: item.color,
                        borderColor: item.color
                      }}
                    >
                      <TrendingUpIcon size={16} />
                      {item.change}% increase
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Aha Moments / Key Insights Section */}
      <div 
        ref={insightsRef} 
        className="max-w-5xl mx-auto px-4 mb-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={insightsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold mb-2">Aha Moments</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Surprising insights from four decades of changing food habits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={insightsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="text-4xl mb-4">🥤 > 🫘</div>
                <h3 className="text-xl font-bold mb-2">Cola Beats Dal</h3>
                <p className="text-muted-foreground flex-grow">
                  In 2023, Indian households spent more on soft drinks than on pulses (dal), a dietary staple for centuries.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span>Soft Drinks: 7%</span>
                  <span>Pulses: 4%</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={insightsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="text-4xl mb-4">📉</div>
                <h3 className="text-xl font-bold mb-2">Cereal Crash</h3>
                <p className="text-muted-foreground flex-grow">
                  Rice and wheat combined fell from 30% of the food budget in 1983 to just 15% in 2023—a 50% decline in their share.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span>1983: 30%</span>
                  <span>2023: 15%</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={insightsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-2">2023 Uptick</h3>
                <p className="text-muted-foreground flex-grow">
                  After decades of decline, the share of household budget spent on food increased slightly in 2023-24, reversing a long-term trend.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span>2022: 72%</span>
                  <span>2023: 73%</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DataVisualization;
