import { MiniDeleteIcon } from '@codecademy/gamut-icons';
import { ComponentProps } from 'react';
import * as React from 'react';

import { Box } from '../Box';
import { FillButton, IconButton, TextButton } from '../Button';
import { Overlay } from '../Overlay';
import { Text } from '../Typography';
import { ModalContainer, ModalContainerProps } from './elements';
import { ImageContainer } from './ImageContainer';
import { ModalBaseProps } from './types';

interface DialogButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: ComponentProps<typeof FillButton>['onClick'];
}

export interface DialogProps extends ModalBaseProps {
  title: ModalBaseProps['title'];
  size?: Exclude<ModalContainerProps['size'], 'fluid' | false>;
  variant?: Extract<
    ComponentProps<typeof FillButton>['variant'],
    'primary' | 'danger'
  >;
  confirmCta: DialogButtonProps;
  cancelCta?: DialogButtonProps;
}

export const Dialog: React.FC<DialogProps> = ({
  title,
  variant,
  children,
  confirmCta,
  cancelCta,
  onRequestClose,
  image,
  size = 'small',
  ...rest
}) => {
  const onConfirm: DialogButtonProps['onClick'] = (e) => {
    onRequestClose();
    confirmCta.onClick?.(e);
  };

  const onCancel: DialogButtonProps['onClick'] = (e) => {
    onRequestClose();
    cancelCta?.onClick?.(e);
  };

  return (
    <Overlay shroud onRequestClose={onCancel as () => void} {...rest}>
      <ModalContainer
        size={size}
        aria-hidden="false"
        aria-modal="true"
        role="dialog"
        layout="dialog"
      >
        <Text as="h2" fontSize={20} lineHeight="base" gridArea="title">
          {title}
        </Text>
        <IconButton
          aria-label="Close Dialog"
          size="small"
          alignSelf="start"
          icon={MiniDeleteIcon}
          onClick={onCancel}
          gridArea="close"
        />
        <Box as="div" gridArea="content" data-testid="dialog-content">
          {image && <ImageContainer image={image} size={size} />}
          {children}
        </Box>
        {cancelCta && (
          <TextButton
            {...cancelCta}
            variant="secondary"
            onClick={onCancel}
            justifySelf="end"
            gridArea="cancel"
          />
        )}
        <FillButton
          {...confirmCta}
          variant={variant}
          onClick={onConfirm}
          gridArea="confirm"
        />
      </ModalContainer>
    </Overlay>
  );
};
