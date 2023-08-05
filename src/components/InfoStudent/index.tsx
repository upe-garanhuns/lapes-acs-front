import React, { useState } from 'react';
import * as S from './styles';
import { FiPenTool } from 'react-icons/fi';

export type ComponentProps = {
    
profilePhotoUrl?:string,
name?:string,
email?:string,
period?:number,
phoneNumber?:string,
address?:string,

onEdit?:() => void,

closeModal:() => void,
};

const InfoStudent:React.FC<ComponentProps> = ({
profilePhotoUrl,
name,
email,
period,
phoneNumber,
address,

onEdit,

closeModal
}) => {
const [warning, setWarninig] = useState(false);

const setWarningText = () => {
setWarninig(true);
};

return (
<>
<S.Background onClick={closeModal} />
<S.Container>
<S.EditButton onClick={onEdit}>
<FiPenTool />
</S.EditButton>
{profilePhotoUrl ? (
<S.ProfilePhoto src={profilePhotoUrl} alt="Profile Photo" />
) : (
<S.ProfileIconContainer>
<S.ProfileIcon />
</S.ProfileIconContainer>
)}
<S.Name>{name}</S.Name>
<S.HorizontalLine />
<S.InfoText>{email}</S.InfoText>
<S.InfoText>{period}º Período</S.InfoText>
<S.InfoText>{phoneNumber}</S.InfoText>
<S.HorizontalLine />
<S.InfoText>{address}</S.InfoText>
</S.Container>
</>
);
};

export default InfoStudent;