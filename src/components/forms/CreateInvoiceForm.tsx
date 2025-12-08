import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
    studentName: z.string().min(1, "Student name is required"),
    invoiceType: z.string().min(1, "Invoice type is required"),
    amount: z.string().min(1, "Amount is required"),
    dueDate: z.string().min(1, "Due date is required"),
    status: z.enum(["Pending", "Paid", "Overdue"]),
});

type FormData = z.infer<typeof formSchema>;

interface CreateInvoiceFormProps {
    onSuccess: () => void;
}

export function CreateInvoiceForm({ onSuccess }: CreateInvoiceFormProps) {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            status: "Pending",
        },
    });

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            console.log("Form Data:", data);
            setIsLoading(false);
            toast({
                title: "Invoice Created",
                description: `Invoice for ${data.studentName} has been created successfully.`,
            });
            onSuccess();
        }, 1000);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="studentName">Student Name</Label>
                    <Input id="studentName" placeholder="John Doe" {...register("studentName")} />
                    {errors.studentName && (
                        <p className="text-sm text-destructive">{errors.studentName.message}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="invoiceType">Invoice Type</Label>
                    <Select onValueChange={(value) => setValue("invoiceType", value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Tuition Fee">Tuition Fee</SelectItem>
                            <SelectItem value="Library Fee">Library Fee</SelectItem>
                            <SelectItem value="Sports Fee">Sports Fee</SelectItem>
                            <SelectItem value="Exam Fee">Exam Fee</SelectItem>
                            <SelectItem value="Transport Fee">Transport Fee</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.invoiceType && (
                        <p className="text-sm text-destructive">{errors.invoiceType.message}</p>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="amount">Amount ($)</Label>
                    <Input id="amount" type="number" placeholder="0.00" {...register("amount")} />
                    {errors.amount && (
                        <p className="text-sm text-destructive">{errors.amount.message}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="dueDate">Due Date</Label>
                    <Input id="dueDate" type="date" {...register("dueDate")} />
                    {errors.dueDate && (
                        <p className="text-sm text-destructive">{errors.dueDate.message}</p>
                    )}
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select
                    defaultValue="Pending"
                    onValueChange={(value) => setValue("status", value as "Pending" | "Paid" | "Overdue")}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Pending">Pending</SelectItem>
                        <SelectItem value="Paid">Paid</SelectItem>
                        <SelectItem value="Overdue">Overdue</SelectItem>
                    </SelectContent>
                </Select>
                {errors.status && (
                    <p className="text-sm text-destructive">{errors.status.message}</p>
                )}
            </div>

            <div className="flex justify-end pt-4">
                <Button type="submit" disabled={isLoading} className="gradient-primary text-primary-foreground">
                    {isLoading ? "Creating..." : "Create Invoice"}
                </Button>
            </div>
        </form>
    );
}
