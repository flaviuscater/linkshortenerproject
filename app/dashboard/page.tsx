import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your link shortener dashboard. Manage and track your links here.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Links</CardTitle>
            <CardDescription>All time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Clicks</CardTitle>
            <CardDescription>All time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Links</CardTitle>
            <CardDescription>Currently active</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Links</CardTitle>
          <CardDescription>Your most recently created short links</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">
            No links created yet. Create your first short link to get started!
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
