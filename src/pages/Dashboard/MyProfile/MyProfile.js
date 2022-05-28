import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import Loading from '../../../global/Loading/Loading';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const [showForm, setShowForm] = useState(false)
    const [currentUser, loading] = useAuthState(auth);
    const useremail = currentUser?.email;
    const img = currentUser?.photoURL;
    const url = `http://localhost:5000/user/${useremail}`;
    const { data: user, isLoading, refetch } = useQuery('user-profile', () => (
        fetch(url)
            .then(res => res.json())
    ))

    if (loading || isLoading) {
        return <Loading />
    }

    const { name, email, phone, address, facebookId, linkedId } = user;

    const handleSubmit = (event) => {
        event.preventDefault();
        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const facebook = event.target.facebook.value;
        const linkedin = event.target.linkedin.value;
        const detail = { phone, address, facebook, linkedin }
        fetch(`http://localhost:5000/user/${useremail}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(detail)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0) {
                    toast.success("Profile update successfull.")
                    event.target.reset();
                    refetch();
                }
            })
    }

    return (
        <div className="MyProfile">
            <div className="myProfile__title text-center">
                <h2 className="text-2xl text-primary font-semibold inline-block border-b-2 border-accent pb-2 mb-5">Your Profile:</h2>
            </div>
            <div className="myProfile__content">
                <div className="hero bg-base-100">
                    <div className="hero-content flex-col justify-center items-center lg:flex-row">
                        <div className="avatar flex-col">
                            <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt="" />
                            </div>
                            <button onClick={() => setShowForm(!showForm)} className="btn btn-primary mt-5">Edit Profile</button>
                        </div>
                        <div className="profile__detail lg:ml-10 w-[600px] grid grid-cols-2 gap-2">
                            <div className="detail__block">
                                <label className="label text-lg font-semibol">Name:</label>
                                <h2 className="text-xl">{name}</h2>
                            </div>
                            <div className="detail__block">
                                <label className="label text-lg font-semibold">Email:</label>
                                <h2 className="text-xl">{email}</h2>
                            </div>
                            <div className="detail__block">
                                <label className="label text-lg font-semibold">Phone:</label>
                                <h2 className="text-xl">{phone}</h2>
                            </div>
                            <div className="detail__block">
                                <label className="label text-lg font-semibold">Address:</label>
                                <h2 className="text-xl">{address}</h2>
                            </div>
                            <div className="detail__block">
                                <label className="label text-lg font-semibold">Facebook:</label>
                                <h2 className="text-xl">{facebookId}</h2>
                            </div>
                            <div className="detail__block">
                                <label className="label text-lg font-semibold">linkedin:</label>
                                <h2 className="text-xl">{linkedId}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                showForm && (
                    <div className="profile__edit text-center mt-5">
                        <h2 className="text-2xl text-primary font-semibold inline-block border-b-2 border-accent pb-2 mb-5">Update Information:</h2>
                        <div class="card flex-shrink-0 w-full shadow-2xl bg-base-100 mt-3">
                            <form onSubmit={handleSubmit}>
                                <div class="card-body">
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Phone</span>
                                        </label>
                                        <input name="phone" type="text" placeholder="phone" class="input input-bordered" />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Address</span>
                                        </label>
                                        <input name="address" type="text" placeholder="address" class="input input-bordered" />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Facebook</span>
                                        </label>
                                        <input name="facebook" type="text" placeholder="facebook url" class="input input-bordered" />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Linked in</span>
                                        </label>
                                        <input name="linkedin" type="text" placeholder="linkedin url" class="input input-bordered" />
                                    </div>
                                    <div class="form-control mt-6">
                                        <button class="btn btn-primary">submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyProfile;