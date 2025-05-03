import React, { useState } from 'react';
import { Input } from '../components/Input';
import {
  MagnifyingGlass,
  EnvelopeSimple,
  Lock,
  User,
  Phone,
  Calendar,
  CreditCard,
} from '@phosphor-icons/react';

export const InputDemo: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Basic Input</h2>
        <div className="max-w-xs space-y-4">
          <Input
            placeholder="Enter text..."
            label="Basic input"
            helperText="This is a helper text"
          />
          <Input
            type="email"
            placeholder="Enter email..."
            label="Required input"
            required
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Input Sizes</h2>
        <div className="max-w-xs space-y-4">
          <Input
            size="sm"
            placeholder="Small input"
            label="Small"
          />
          <Input
            size="md"
            placeholder="Medium input"
            label="Medium"
          />
          <Input
            size="lg"
            placeholder="Large input"
            label="Large"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">States</h2>
        <div className="max-w-xs space-y-4">
          <Input
            placeholder="Disabled input"
            label="Disabled state"
            disabled
          />
          <Input
            placeholder="Error input"
            label="Error state"
            error="This field is required"
          />
          <Input
            placeholder="Success input"
            label="Success state"
            success="Email is valid"
            value="user@example.com"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
        <div className="max-w-xs space-y-4">
          <Input
            placeholder="Search..."
            leftIcon={<MagnifyingGlass />}
          />
          <Input
            type="email"
            placeholder="Enter email..."
            label="Email"
            leftIcon={<EnvelopeSimple />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Enter password..."
            label="Password"
            leftIcon={<Lock />}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Form Example</h2>
        <form className="max-w-md space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="First Name"
              placeholder="John"
              leftIcon={<User />}
              required
            />
            <Input
              label="Last Name"
              placeholder="Doe"
              leftIcon={<User />}
              required
            />
          </div>
          <Input
            type="email"
            label="Email"
            placeholder="john.doe@example.com"
            leftIcon={<EnvelopeSimple />}
            required
            fullWidth
          />
          <Input
            type="tel"
            label="Phone"
            placeholder="+1 (555) 000-0000"
            leftIcon={<Phone />}
            fullWidth
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              label="Birth Date"
              placeholder="MM/DD/YYYY"
              leftIcon={<Calendar />}
            />
            <Input
              type="text"
              label="Card Number"
              placeholder="0000 0000 0000 0000"
              leftIcon={<CreditCard />}
            />
          </div>
        </form>
      </section>
    </div>
  );
}; 