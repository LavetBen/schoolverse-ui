import { useState, useEffect } from "react";
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
    status: z.enum(["Pending", "Paid", "Overdue", "Failed", "Completed"]),
});

type FormData = z.infer<typeof formSchema>;

interface EditInvoiceFormProps {
    initialData: any;
    onSuccess: () => void;
}

export function EditInvoiceForm({ initialData, onSuccess }: EditInvoiceFormProps) {
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
            studentName: initialData?.student || "",
            invoiceType: initialData?.type || "",
            amount: initialData?.amount?.replace("$", "").replace(",", "") || "",
            dueDate: "2024-03-30", // Mock date for now
            status: initialData?.status || "Pending",
        },
    });

    // Pre-fill fields when initialData changes
    useEffect(() => {
        if (initialData) {
            setValue("studentName", initialData.student);
            setValue("invoiceType", initialData.type);
            setValue("amount", initialData.amount.replace("$", "").replace(",", ""));
            setValue("status", initialData.status);
        }
    }, [initialData, setValue]);


    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            console.log("Updated Data:", data);
            setIsLoading(false);
            toast({
                title: "Invoice Updated",
                description: `Invoice for ${data.studentName} has been updated.`,
            });
            onSuccess();
        }, 1000);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="edit-studentName">Student Name</Label>
                    <Input id="edit-studentName" {...register("studentName")} disabled className="bg-muted" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="edit-invoiceType">Invoice Type</Label>
                    <Input id="edit-invoiceType" {...register("invoiceType")} disabled className="bg-muted" />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="edit-amount">Amount ($)</Label>
                    <Input id="edit-amount" type="number" {...register("amount")} />
                    {errors.amount && (
                        <p className="text-sm text-destructive">{errors.amount.message}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="edit-dueDate">Due Date</Label>
                    <Input id="edit-dueDate" type="date" {...register("dueDate")} />
                    {errors.dueDate && (
                        <p className="text-sm text-destructive">{errors.dueDate.message}</p>
                    )}
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="edit-status">Status</Label>
                <Select
                    defaultValue={initialData?.status}
                    onValueChange={(value) => setValue("status", value as any)}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Pending">Pending</SelectItem>
                        <SelectItem value="Completed">Completed</SelectItem>
                        <SelectItem value="Paid">Paid</SelectItem>
                        <SelectItem value="Overdue">Overdue</SelectItem>
                        <SelectItem value="Failed">Failed</SelectItem>
                    </SelectContent>
                </Select>
                {errors.status && (
                    <p className="text-sm text-destructive">{errors.status.message}</p>
                )}
            </div>

            <div className="flex justify-end pt-4">
                <Button type="submit" disabled={isLoading} className="gradient-primary text-primary-foreground">
                    {isLoading ? "Saving..." : "Save Changes"}
                </Button>
            </div>
        </form>
    );
}
