import { Newspaper } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const DashboardCard = () => {
    return (
        <Card className="bg-slate-100 dark:bg-slate-800 p-4 pb-0">
            <CardContent>
                <h3 className="text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200">
                    Posts
                </h3>
                <div className="flex gap-5 justify-center items-center">
                    <Newspaper className="text-slate-500" size={72} />
                    <h3 className="text-5xl font-semibold text-slate-500 dark:text-slate-200">
                        100
                    </h3>
                </div>
            </CardContent>
        </Card>
    );
}

export default DashboardCard;