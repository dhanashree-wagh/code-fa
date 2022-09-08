import { useContext } from 'react';

import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { RestoreFromTrashOutlined as Restore, DeleteForeverOutlined as Delete } from '@mui/icons-material';
import { DataContext } from '../../context/DataProvider';

const StyledCard = styled(Card)`
    border: 1px solid #f9faad;
    border-radius: 8px;
    background-color: #ffba00;
    width: 240px;
    margin: 8px;
    box-shadow: 5px 10px #fcdb5a;
`

const DeleteNote = ({ deleteNote }) => {

    const { deleteNotes, setNotes, setAcrchiveNotes, setDeleteNotes } = useContext(DataContext);

    const restoreNote = (deleteNote) => {
        const updatedNotes = deleteNotes.filter(data => data.id !== deleteNote.id);
        setDeleteNotes(updatedNotes);
        setNotes(prevArr => [deleteNote, ...prevArr]);
    }

    const removeNote = (deleteNote) => {
        const updatedNotes = deleteNotes.filter(data => data.id !== deleteNote.id);
        setDeleteNotes(updatedNotes);
    }

    return (
        <StyledCard>
                <CardContent>
                    <Typography>{deleteNote.heading}</Typography>
                    <Typography>{deleteNote.text}</Typography>
                </CardContent>
                <CardActions>
                    <Delete 
                    fontSize='medium'
                        style={{color:'red' }}
                        onClick={() => removeNote(deleteNote)}
                    />
                    <Restore 
                        fontSize='medium'
                        style={{ color:'green' }}
                        onClick={() => restoreNote(deleteNote)}
                    />
                </CardActions>
        </StyledCard>
    )
}

export default DeleteNote;