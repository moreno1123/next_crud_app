import AddUserForm from './add_user';
import UpdateUserFrom from './update_user';

export default function From(){

  const flag = true;

  return(
    <div className='container mx-auto py-5'>
      { flag ? <AddUserForm/> : <UpdateUserFrom/> }
    </div>
  )
}