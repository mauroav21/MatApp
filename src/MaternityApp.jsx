import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Baby, Heart, MessageCircle, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function MaternityApp() {
  return (
    <div className="min-h-screen bg-pink-50 p-4">
      <motion.h1 className="text-3xl font-bold text-pink-700 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Postpartum Support</motion.h1>
      
      <div className="grid grid-cols-2 gap-4">Remove-Item -Recurse -Force *

        <Card className="p-4 rounded-2xl shadow-md hover:shadow-lg transition bg-white">
          <CardContent className="flex flex-col items-center">
            <Baby className="text-pink-500 w-12 h-12 mb-2" />
            <h2 className="text-lg font-semibold">Baby Tracker</h2>
            <p className="text-sm text-gray-500">Log feeding, sleep, and diaper changes</p>
            <Button className="mt-4 bg-pink-500 text-white">Go</Button>
          </CardContent>
        </Card>

        <Card className="p-4 rounded-2xl shadow-md hover:shadow-lg transition bg-white">
          <CardContent className="flex flex-col items-center">
            <Heart className="text-red-500 w-12 h-12 mb-2" />
            <h2 className="text-lg font-semibold">Health & Recovery</h2>
            <p className="text-sm text-gray-500">Track physical and emotional recovery</p>
            <Button className="mt-4 bg-red-500 text-white">Go</Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <Card className="p-4 rounded-2xl shadow-md hover:shadow-lg transition bg-white">
          <CardContent className="flex flex-col items-center">
            <MessageCircle className="text-blue-500 w-12 h-12 mb-2" />
            <h2 className="text-lg font-semibold">Support Group</h2>
            <p className="text-sm text-gray-500">Connect with other new moms</p>
            <Button className="mt-4 bg-blue-500 text-white">Go</Button>
          </CardContent>
        </Card>

        <Card className="p-4 rounded-2xl shadow-md hover:shadow-lg transition bg-white">
          <CardContent className="flex flex-col items-center">
            <Calendar className="text-green-500 w-12 h-12 mb-2" />
            <h2 className="text-lg font-semibold">Appointments</h2>
            <p className="text-sm text-gray-500">Manage doctor visits and reminders</p>
            <Button className="mt-4 bg-green-500 text-white">Go</Button>
          </CardContent>
        </Card>
      </div>

      

      <div className="flex justify-center mt-8">
        <Button className="bg-gray-700 text-white">Settings <Settings className="ml-2" /></Button>
      </div>
    </div>
  );
}