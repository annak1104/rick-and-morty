import { FormInput } from '../../types/FormInput';
import { ListItem, ListItemText, Typography } from '@mui/material';

type Props = {
  content: FormInput;
};

export function HistoryListFilterItem({ content }: Props) {
  const fieldsByFilter = {
    character: {
      name: content.char_name,
      gender: content.char_gender,
      species: content.char_species,
      type: content.char_type,
      status: content.char_status,
    },
    location: {
      name: content.loc_name,
      type: content.loc_type,
      dimension: content.loc_dimension,
    },
    episodes: {
      name: content.ep_name,
      code: content.ep_code,
    },
  };
  return (
    <ListItem
      sx={{
        pl: 0,
        pt: 0,
        display: 'block',
        ':hover': {
          bgcolor: '#F5F5F5',
          cursor: 'default',
        },
      }}
    >
      {Object.keys(fieldsByFilter).map((fieldsGroup) => (
        <>
          {Object.keys((fieldsByFilter as any) [fieldsGroup]).some(
            (key) => (fieldsByFilter as any) [fieldsGroup][key],
          ) && (
            <>
              <ListItemText
                sx={{
                  color: '#00000099',
                  textTransform: 'capitalize',
                  display: 'block',
                }}
              >
                <Typography>{fieldsGroup}:</Typography>
              </ListItemText>

              {Object.keys((fieldsByFilter as any) [fieldsGroup]).map((key) => (
                <>
                  {(fieldsByFilter as any) [fieldsGroup][key] ? (
                    <Typography
                      key={key}
                      sx={{
                        textTransform: 'capitalize',
                        display: 'block',
                      }}
                    >
                      {`${key}: ${(fieldsByFilter as any) [fieldsGroup][key]}`}
                    </Typography>
                  ) : null}
                </>
              ))}
            </>
          )}
        </>
      ))}
    </ListItem>
  );
}
