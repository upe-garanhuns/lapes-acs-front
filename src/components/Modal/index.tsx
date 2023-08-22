'use client';
import React, { ReactNode, useEffect, useRef } from 'react';

import * as S from './styles';

type ComponentProps = {
  width?: number;
  height?: number;
  isOpen: boolean;
  closeModal: () => void;
  closeModalArea: () => void;
  children: React.ReactNode;
  className?: string;
  closeText?: ReactNode;
};

export const Modal = ({
  width,
  height,
  isOpen,
  closeModal,
  closeModalArea,
  children,
  className,
  closeText = 'Fechar'
}: ComponentProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstFocusableElRef = useRef<HTMLElement | undefined>();
  const lastFocusableElRef = useRef<HTMLElement | undefined>();
  const handleContainerClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };
  useEffect(() => {
    if (isOpen) {
      const focusableEls = containerRef.current?.querySelectorAll(
        'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
      ) as NodeListOf<HTMLElement>;
      if (!focusableEls || focusableEls.length === 0) {
        return;
      }
      firstFocusableElRef.current = focusableEls[0];
      lastFocusableElRef.current = focusableEls[focusableEls.length - 1];

      const handleKeyDown = (event: KeyboardEvent) => {
        const isTabPressed = event.key === 'Tab';

        if (!isTabPressed) {
          event.preventDefault;
        }
        if (
          event.shiftKey &&
          isTabPressed &&
          firstFocusableElRef.current &&
          document.activeElement === firstFocusableElRef.current
        ) {
          firstFocusableElRef.current?.focus();
          event.preventDefault();
        } else if (
          !event.shiftKey &&
          lastFocusableElRef.current &&
          document.activeElement === lastFocusableElRef.current
        ) {
          firstFocusableElRef.current?.focus();
          event.preventDefault();
        } else if (
          firstFocusableElRef.current &&
          !containerRef.current?.contains(document.activeElement) &&
          lastFocusableElRef.current !== undefined
        ) {
          lastFocusableElRef.current.focus();
          event.preventDefault();
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);
  if (isOpen) {
    return (
      <S.Overlay onClick={closeModalArea}>
        <S.Container
          ref={containerRef}
          width={width}
          height={height}
          className={className}
          onClick={handleContainerClick}
        >
          {children}
          <S.CloseButton onClick={closeModal}>{closeText}</S.CloseButton>
        </S.Container>
      </S.Overlay>
    );
  }

  return;
};
