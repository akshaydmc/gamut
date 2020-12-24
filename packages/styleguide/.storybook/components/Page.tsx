import React, { useContext } from 'react';
import { DocsContext } from '@storybook/addon-docs/blocks';
import { SourceBadge, StatusBadge } from './Badge';
import { styled } from '@storybook/theming';
import { theme } from '@codecademy/gamut-styles';
import { OpenIcon } from '@codecademy/gamut-icons';

const FigmaLink = styled.a`
  display: inline-flex;
  grid-template-columns: max-content max-content;
  line-height: 1;
  column-gap: 0.5rem;
  align-items: flex-start;
  color: ${theme.colors.blue};
  border-bottom: 2px solid transparent;

  &:hover {
    text-decoration: none;
    border-bottom-color: ${theme.colors.blue};
  }
`;

const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
  column-gap: 1rem;
  row-gap: 0.5rem;
  margin-bottom: 1rem;
`;

const HeaderCol = styled.div``;

const StoryTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

export const Page = (props) => {
  const {
    mdxComponentMeta: { title },
    parameters: { component, subcomponents, status, pageTitle, figma, source },
  } = useContext(DocsContext);

  const titleString = pageTitle || title.split('/').reverse()[0];
  const showStatus = Boolean(status) || Boolean(component || subcomponents);
  const npmLink = `https://www.npmjs.com/package/@codecademy/${source}`;

  return (
    <>
      <HeaderRow>
        <HeaderCol>
          <StoryTitle>{titleString}</StoryTitle>
        </HeaderCol>
      </HeaderRow>
      <HeaderRow>
        {showStatus && (
          <>
            <HeaderCol>
              <strong>Status: </strong>
            </HeaderCol>
            <HeaderCol>
              <StatusBadge status={status || 'stable'} />
            </HeaderCol>
          </>
        )}
        {source && (
          <>
            <HeaderCol>
              <strong>Source: </strong>
            </HeaderCol>
            <HeaderCol>
              <FigmaLink target="_blank" href={npmLink}>
                @codecademy/{source} <OpenIcon size={14} />
              </FigmaLink>
            </HeaderCol>
          </>
        )}
        {figma && (
          <>
            <HeaderCol>
              <strong>Design:</strong>
            </HeaderCol>
            <HeaderCol>
              <FigmaLink target="_blank" href={figma}>
                Figma <OpenIcon size={14} />
              </FigmaLink>
            </HeaderCol>
          </>
        )}
      </HeaderRow>
      {props.children}
    </>
  );
};
