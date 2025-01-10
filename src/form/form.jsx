import { useState } from "react";
import { useFormik } from "formik";
import * as y from "yup";
export function Form() {
    const [selectedCountry, setSelectedCountry] = useState('');

    // const handleChange = (event) => {
    //     setSelectedCountry(event.target.value);
    // };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            gender: '',
            country: '',
            password: ''
        },
        validationSchema: y.object({
            name: y.string().trim().required('không được bỏ trống'),
            email: y.string().email('invalid email address').required(),
            gender: y.string().required(),
            country: y.string().required(),
            password: y.string().min(8, 'Password không được nhỏ hơn 8 kí tự').required(),

        }),
        onSubmit: value => {
            alert(JSON.stringify(value, null, 2));
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <label className="border px-4 py-1 rounded">
                    <p>Username</p>
                    <input type="text"
                        name="name"
                        id="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Nhập Tên" />
                    {formik.touched.name && formik.errors.name ? (<p className="text-red-400">{formik.errors.name}</p>) : null}
                </label>
                <label className="border px-4 py-1 rounded">
                    <p>Email</p>
                    <input type="text"
                        name="email"
                        id="email"
                        placeholder="Nhập Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email} />
                    {
                        formik.touched.email && formik.errors.email ? (
                            <p className="text-red-400">{formik.errors.email}</p>
                        ) : null
                    }
                </label>
                <br />

                <p>Gender</p>
                <label htmlFor="">
                    <input type="radio"
                        name="gender"
                        id="gender-male"
                        value="male"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.gender === 'male'}
                    />Nam
                </label>
                <label htmlFor="">
                    <input type="radio"
                        name="gender"
                        id="gender-female"
                        value="female"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.gender === 'female'}
                    />Nữ
                </label>
                {formik.touched.gender && formik.errors.gender ? (
                    <p className="text-red-400">{formik.errors.gender}</p>
                ) : null}

                <p>Country</p>
                <select
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                    <option value="">-- Chọn quốc gia --</option>
                    <option value="us">USA</option>
                    <option value="italy">Italia</option>
                    <option value="uk">UK</option>
                    <option value="australia">Australia</option>
                </select>
                {formik.touched.country && formik.errors.country ? (
                    <p className="text-red-400">{formik.errors.country}</p>
                ): null}
                {selectedCountry && (
                    <p>Bạn đã chọn: {selectedCountry === "us"
                        ? "USA"
                        : selectedCountry === "italy"
                            ? "Italia"
                            : selectedCountry === "uk"
                                ? "UK"
                                : "Australia"}</p>
                )}

                <label htmlFor="" className="border px-4 py-1 rounded">
                    <p>Password</p>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password} />
                </label>
                {formik.touched.password && formik.errors.password ? (
                    <p className="text-red-400">{formik.errors.password}</p>
                ) : null}
                <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                    Submit
                </button>
            </form>
        </>
    );
}
