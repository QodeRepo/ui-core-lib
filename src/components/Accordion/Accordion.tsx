import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { AccordionProps } from '@mui/material';

export type AccordionItem = {
  id: string;
  title: string;
  content: string | React.ReactNode;
  disabled?: boolean;
};

export type MyAccordionProps = {
  items: AccordionItem[];
  expanded?: string | false;
  onChange?: (panel: string) => void;
  allowMultiple?: boolean;
  expandIcon?: React.ReactNode;
} & Omit<AccordionProps, 'onChange' | 'expanded' | 'children'>;

const MyAccordion = ({
  items,
  expanded,
  onChange,
  allowMultiple,
  expandIcon,
  ...props
}: MyAccordionProps) => {
  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    if (onChange) {
      onChange(isExpanded ? panel : '');
    }
  };

  return (
    <>
      {items.map((item) => (
        <Accordion
          key={item.id}
          expanded={allowMultiple ? undefined : expanded === item.id}
          onChange={allowMultiple ? undefined : handleChange(item.id)}
          disabled={item.disabled}
          {...props}
        >
          <AccordionSummary
            expandIcon={expandIcon || <ExpandMoreIcon />}
            aria-controls={`${item.id}-content`}
            id={`${item.id}-header`}
          >
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {typeof item.content === 'string' ? (
              <Typography>{item.content}</Typography>
            ) : (
              item.content
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default MyAccordion;
