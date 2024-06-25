import {ErrorInfo} from 'react';

export interface ErrorBoundaryState {
  error: Error | null;
  errorInfo?: ErrorInfo;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
}
