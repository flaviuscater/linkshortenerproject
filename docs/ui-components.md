# UI Components — shadcn/ui

## Rules

- **shadcn/ui is the only UI component library.** Do not create custom components for anything shadcn/ui already provides.
- Always use shadcn/ui components for all UI elements: buttons, inputs, dialogs, cards, forms, tables, badges, etc.
- Install new shadcn/ui components via the CLI (`npx shadcn@latest add <component>`) — do not hand-roll equivalents.
- For forms, use shadcn/ui Form components with `react-hook-form` and `zod` validation.

## DO NOT

- ❌ Do NOT create custom button, input, card, dialog, or any other UI primitives that shadcn/ui provides.
- ❌ Do NOT install alternative component libraries (e.g. MUI, Chakra UI, Radix primitives directly, Headless UI).
- ❌ Do NOT write inline styles or bespoke CSS classes to replicate shadcn/ui component behaviour.
- ❌ Do NOT skip using shadcn/ui just because a component seems "simple" — always use the library equivalent.
- ❌ Do NOT create forms without using shadcn/ui's Form components and react-hook-form.

## Installation

Install components as needed:

```bash
npx shadcn@latest add button input card dialog form table badge
```

## Basic Components

### Button

```tsx
import { Button } from '@/components/ui/button';

// Variants: default, destructive, outline, secondary, ghost, link
<Button variant="default">Click me</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline" size="sm">Small</Button>
<Button disabled>Loading...</Button>
```

### Input

```tsx
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>
```

### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

## Forms

Use Form components with react-hook-form and zod:

```tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  username: z.string().min(2, 'Username must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
});

export function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: '', email: '' },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormDescription>Your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

## Dialogs

```tsx
'use client';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>This action cannot be undone.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

## Tables

```tsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Item 1</TableCell>
      <TableCell>Active</TableCell>
      <TableCell><Button size="sm">Edit</Button></TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Badges & Status

```tsx
import { Badge } from '@/components/ui/badge';

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>
```

## Styling

Use the `cn()` utility to merge Tailwind classes:

```tsx
import { cn } from '@/lib/utils';

<Button className={cn('w-full', isLoading && 'opacity-50')}>
  Submit
</Button>
```

## Reference

Full documentation: https://ui.shadcn.com/docs/components
