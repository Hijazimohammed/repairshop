'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';

import {
  insertTicketSchema,
  type insertTicketSchemaType,
  type selectTicketSchemaType,
} from '@/zod-schema/ticket';
import { type selectCustomerSchemaType } from '@/zod-schema/customer';

type Props = {
  customer: selectCustomerSchemaType;
  ticket?: selectTicketSchemaType;
};

export default function TicketForm({ customer, ticket }: Props) {
  const defaultValues: insertTicketSchemaType = {
    id: ticket?.id ?? '(New)',
    customerId: ticket?.customerId ?? customer.id,
    title: ticket?.title ?? '',
    description: ticket?.description ?? '',
    completed: ticket?.completed ?? false,
    tech: ticket?.tech ?? 'new-ticket@example.com',
  };

  const form = useForm<insertTicketSchemaType>({
    mode: 'onBlur',
    resolver: zodResolver(insertTicketSchema),
    defaultValues,
  });

  async function submitForm(data: insertTicketSchemaType) {
    console.log(data);
  }

  return (
    <div className='flex flex-col gap-1 sm:px-8'>
      <div className=''>
        <h2 className='text-2xl font-bold'>
          {ticket?.id ? 'edit' : 'New'} Ticket{' '}
          {ticket?.id ? `#${ticket.id}` : 'Form'}
        </h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitForm)}>
          <div className='flex flex-col gap-2 sm:gap-4'>
            <p className=''>{JSON.stringify(form.getValues())}</p>
          </div>
        </form>
      </Form>
    </div>
  );
}
